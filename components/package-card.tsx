import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

interface PackageCardProps {
  id: number;
  imageSrc: string;
  roomName: string;
  location: string;
  price: string;
  rating: number;
}

const PackageCard: React.FC<PackageCardProps> = ({
  id,
  imageSrc,
  roomName,
  location,
  price,
  rating,
}) => {
  return (
    <section className="h-full">
      <div className="mx-auto max-w-screen-xl p-6">
        <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl h-full">
          <div className="relative flex items-end overflow-hidden rounded-xl h-80">
            <Image
              src={imageSrc}
              alt="Hotel Photo"
              width={500}
              height={300}
              className="object-cover"
            />
            <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-slate-400 ml-1 text-sm">{rating}</span>
            </div>
          </div>

          <div className="mt-1 p-2">
            <h2 className="text-3xl text-slate-700">{roomName}</h2>
            <p className="text-slate-400 mt-1 text-sm">{location}</p>

            <div className="mt-3 flex items-end justify-between">
              <p>
                <span className="text-lg font-bold text-blue-500">
                  {price}
                </span>
                <span className="text-slate-400 text-sm">/night</span>
              </p>
              <Link href={`/accommodation/${id}`}>
                <Button>Book Now!</Button>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default PackageCard;
