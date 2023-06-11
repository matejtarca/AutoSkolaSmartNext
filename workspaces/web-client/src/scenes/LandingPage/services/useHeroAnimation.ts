import { useCallback, useEffect, useRef, useState } from "react";

type Point = {
  x: number;
  y: number;
  z: number;
};

type Velocity = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  z: number;
};

const STAR_SIZE = 3,
  STAR_MIN_SCALE = 0.2,
  OVERFLOW_THRESHOLD = 50;

function generate(count: number): Point[] {
  const stars: Point[] = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: 0,
      y: 0,
      z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
    });
  }
  return stars;
}

function placeStar(star: Point, width: number, height: number): Point {
  star.x = Math.random() * width;
  star.y = Math.random() * height;
  return star;
}

function recycleStar(
  star: Point,
  velocity: Velocity,
  width: number,
  height: number
): Point {
  let direction = "z";

  let vx = Math.abs(velocity.x),
    vy = Math.abs(velocity.y);

  if (vx > 1 || vy > 1) {
    let axis;

    if (vx > vy) {
      axis = Math.random() < vx / (vx + vy) ? "h" : "v";
    } else {
      axis = Math.random() < vy / (vx + vy) ? "v" : "h";
    }

    if (axis === "h") {
      direction = velocity.x > 0 ? "l" : "r";
    } else {
      direction = velocity.y > 0 ? "t" : "b";
    }
  }

  star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

  if (direction === "z") {
    star.z = 0.1;
    star.x = Math.random() * width;
    star.y = Math.random() * height;
  } else if (direction === "l") {
    star.x = -OVERFLOW_THRESHOLD;
    star.y = height * Math.random();
  } else if (direction === "r") {
    star.x = width + OVERFLOW_THRESHOLD;
    star.y = height * Math.random();
  } else if (direction === "t") {
    star.x = width * Math.random();
    star.y = -OVERFLOW_THRESHOLD;
  } else if (direction === "b") {
    star.x = width * Math.random();
    star.y = height + OVERFLOW_THRESHOLD;
  }

  return star;
}

function update(
  velocity: Velocity,
  stars: Point[],
  width: number,
  height: number
): Point[] {
  velocity.tx *= 0.96;
  velocity.ty *= 0.96;

  velocity.x += (velocity.tx - velocity.x) * 0.8;
  velocity.y += (velocity.ty - velocity.y) * 0.8;

  return stars.map((star) => {
    const newStar = { ...star };
    newStar.x += velocity.x * star.z;
    newStar.y += velocity.y * star.z;

    newStar.x += (star.x - width / 2) * velocity.z * star.z;
    newStar.y += (star.y - height / 2) * velocity.z * star.z;
    newStar.z += velocity.z;

    // recycle when out of bounds
    if (
      newStar.x < -OVERFLOW_THRESHOLD ||
      newStar.x > width + OVERFLOW_THRESHOLD ||
      newStar.y < -OVERFLOW_THRESHOLD ||
      newStar.y > height + OVERFLOW_THRESHOLD
    ) {
      return recycleStar(newStar, velocity, width, height);
    }
    return newStar;
  });
}

function render(
  context: CanvasRenderingContext2D,
  stars: Point[],
  scale: number,
  velocity: Velocity
) {
  stars.forEach((star) => {
    context.beginPath();
    context.lineCap = "round";
    context.lineWidth = STAR_SIZE * star.z * scale;
    context.strokeStyle =
      "rgba(255,255,255," + (0.5 + 0.5 * Math.random()) + ")";

    context.beginPath();
    context.moveTo(star.x, star.y);

    var tailX = velocity.x * 2,
      tailY = velocity.y * 2;

    // stroke() wont work on an invisible line
    if (Math.abs(tailX) < 0.1) tailX = 0.5;
    if (Math.abs(tailY) < 0.1) tailY = 0.5;

    context.lineTo(star.x + tailX, star.y + tailY);

    context.stroke();
  });
}

const useHeroAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = canvasRef.current?.getContext(
    "2d"
  ) as CanvasRenderingContext2D;
  const [scale, setScale] = useState(1);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [stars, setStars] = useState<Point[]>([]);

  const velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

  useEffect(() => {
    setStars(generate((window.innerWidth + window.innerHeight) / 8));
    const onresize = () => {
      setScale(window.devicePixelRatio || 1);
      const width = window.innerWidth * scale;
      const height = window.innerHeight * scale;
      setWidth(width);
      setHeight(height);
      if (canvasRef.current) {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
      setStars((prevState) => {
        return prevState.map((star) => placeStar(star, width, height));
      });
    };
    onresize();
    addEventListener("resize", onresize);
    const step = () => {
      if (context) {
        context.clearRect(0, 0, width, height);
        render(context, stars, scale, velocity);
        setStars(update(velocity, stars, width, height));
      }
      requestAnimationFrame(step);
    };
    step();
  }, []);

  return canvasRef;
};
export default useHeroAnimation;
