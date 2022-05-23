export const DarkLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3",
        padding: 10,
        borderRadius: 5,
      }}
    >
      <h3>dark layout</h3>
      <div> {children}</div>
    </div>
  );
};
