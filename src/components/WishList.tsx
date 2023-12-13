import WishListCard from "./WishListCard";

function WishList(): React.ReactNode {
  return (
    <div className="flex flex-col items-center gap-2">
      <WishListCard />
      <WishListCard />
      <WishListCard />
      <WishListCard />
      <WishListCard />
    </div>
  );
}

export default WishList;
