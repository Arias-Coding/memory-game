interface Props {
  Start: Function;
  position: string;
}

export default function Start({ Start, position }: Props) {
  return (
    <div
      className={`w-full h-screen fixed top-0 left-0 bg-zinc-800/70 z-20 flex justify-center items-center transition transition-200 ${position}`}
    >
      <form
        className="flex justify-center flex-col w-34 gap-8"
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();

          const target = e.target as typeof e.target & {
            level: { value: string };
          };

          const level = target.level.value;

          Start(Number(level));
        }}
      >
        <label className="flex gap-10 items-center">
          <span className="text-2xl font-bold">Dificultad:</span>
          <select
            className="text-xl rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            name="level"
          >
            <option value={"3"}>Facil</option>
            <option value={"6"}>Normal</option>
            <option value={"9"}>Dificil</option>
          </select>
        </label>
        <button
          className="bg-indigo-600 w-max m-auto px-4 py-2 rounded text-xl"
          type="submit"
        >
          Empezar
        </button>
      </form>
    </div>
  );
}
