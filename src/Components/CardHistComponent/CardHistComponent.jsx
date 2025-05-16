import "./CardHistComponent.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function CardHistComponent({ cardHist }) {
  const data = cardHist.map((item) => ({
    ...item,
    timestamp:
      typeof item.timestamp === "string"
        ? new Date(item.timestamp).getTime()
        : item.timestamp instanceof Date
        ? item.timestamp.getTime()
        : item.timestamp,
  }));

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="timestamp"
            type="number"
            scale="time"
            tickFormatter={(ts) => new Date(ts).toLocaleDateString()}
            domain={["dataMin", "dataMax"]}
          />
          <YAxis dataKey="price" tickFormatter={(price) => `$${price}`} />
          <Tooltip
            labelFormatter={(label) => new Date(label).toLocaleDateString()}
            formatter={(value) => [`$${value}`, "Price"]}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorPrice)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

export default CardHistComponent;
