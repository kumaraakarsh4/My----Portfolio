import { useEffect, useRef } from "react"

export default function ParticlesBackground(){

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const particlecount = 50;
    const colors = ["rgba(255,255,255,0.7)"];

    class Particle{
      constructor(){
        this.x = Math.random()*canvas.width;
        this.y = Math.random()*canvas.height;
        // radius help in creating the particles betwwwn 1px to 3px 
        this.radius = Math.random()*2+1;
        this.color = colors[Math.floor(Math.random()*colors.length)];
        this.speedX = (Math.random() - 0.5)*0.5 ;
        this.speedY = (Math.random() - 0.5)*0.5 ;

      }

      draw(){
        ctx.beginPath();
        ctx.arc(this.x , this.y , this.radius, 0, Math.PI*2);
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    update(){
      this.x += this.speedX;
      this.y += this.speedY;


      if(this.x <0) this.x = canvas.width;
      if(this.x > canvas.width) this.x = 0;


      if(this.y <0) this.y = canvas.height;
      if(this.y > canvas.height) this.y = 0;


      this.draw();
    }


    }
   function createParticles(){
    particles = [];
    for(let i=0;i<particlecount;i++){
      particles.push(new Particle());
    }
   }
   function handleResize(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createParticles();
   }
   handleResize();
   window.addEventListener("resize" , handleResize);

   let animationId;
   function animate(){
    // it makes animation frame by frame ;; it clears previous frame for particles
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach((p) => p.update());
    animationId = requestAnimationFrame(animate);
   }
   animate();
// it stops the aniomation loop return function 
   return() =>{
    cancelAnimationFrame(animationId);
    window.removeEventListener("resize" , handleResize)
   }
    



  },[])
  return(
    <canvas
      ref = {canvasRef}
      className= "absolute top-0 left-0 w-full h-full not-pointer-none z-0"
    ></canvas>
  )
}