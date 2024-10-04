export default function AboutMe() {
  const now = new Date();
  const start = new Date(2018, 9, 1);
  console.log(start, now);
  
  const years = now.getFullYear() - start.getFullYear();

  return (
    <div className="w-full mt-8">
      <h2 className="text-3xl font-light mb-0">
        Hi, my name is <strong>Marcin Ostaszewski</strong><br />
      </h2>
      <p className="text-lg mb-2">I am a frontend developer for over {years} years.</p>

      <p>
        I am especially passionate for creating interactive browser applications.
        I created a few basic arcade games and "team builders" for a table-top game.
        All of them are available to check out through GitHub Pages.
      </p>
      <p className="mt-4">
        I have a lot of experience with React, TypeScript, Redux, MobX, Styled Components and Tailwind CSS.
      </p>
    </div>
  )
}