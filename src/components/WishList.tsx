import WishListCard from "./WishListCard";

function WishList(): React.ReactNode {
    return <div className="flex items-center flex-col gap-2">
        <WishListCard />
        <WishListCard />
        <WishListCard />
        <WishListCard />
        <WishListCard />
    </div>
}

export default WishList;