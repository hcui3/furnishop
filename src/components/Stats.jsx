import { stats } from "../data";

const Stats = () => {
  return (
    <div className="bg-accent p-10 rounded-2xl grid grid-cols-2 gap-y-8 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const { value, text } = stat;
        return (
          <div
            className="min-h-[70px] odd:border-r lg:even:border-r lg:last:border-none"
            key={index}
          >
            <p className="title-stats mb-2">{value} </p>
            <p className="subtitle-stats">{text} </p>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
