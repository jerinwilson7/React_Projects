type BillPropsType = {
  setBill: React.Dispatch<React.SetStateAction<number>>;
  bill: number 
};

function Bill({ setBill, bill }: BillPropsType) {
  return (
    <div>
      <p>How much was the bill</p>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

export default Bill;
