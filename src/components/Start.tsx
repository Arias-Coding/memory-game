interface Props {
  setStart: Function;
  setScreen: Function;
}

export default function Start({ setStart, setScreen }: Props) {
  setStart(3);
  setTimeout(() => {
    document.getElementById("screen")?.classList.remove("-translate-y-full");
  }, 600);

  return (
    <>
      <div
        className="w-screen h-screen absolute bg-zinc-800/50 z-20 flex justify-center items-center top-0 -translate-y-full transition transition-700"
        id="screen"
      >
        <form
          onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();

            const target = e.target as typeof e.target & {
              level: { value: string };
            };

            const level = target.level.value;

            setStart(Number(level));
            setScreen(false);
          }}
        >
          <label>
            Dificultad:
            <select className="text-black inline-block ml-8" name="level">
              <option value={"3"}>Facil</option>
              <option value={"5"}>Normal</option>
              <option value={"8"}>Dificil</option>
            </select>
          </label>
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
