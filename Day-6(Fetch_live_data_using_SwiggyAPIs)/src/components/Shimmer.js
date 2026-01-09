export const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(8).fill("").map((_, i) => (
        <div className="shimmer-card" key={i}>
          <div className="shimmer-img"></div>
          <div className="shimmer-line title"></div>
          <div className="shimmer-line"></div>
          <div className="shimmer-line short"></div>
        </div>
      ))}
    </div>
  );
};
