import { getCollections } from "@/lib/actions/actions";
import Image from "next/image";
import Link from "next/link";

const Collections = async () => {
  const collections = await getCollections();

  return (
    <div className="flex flex-col items-center gap-10 py-10 px-5">
      <p className="text-heading1-bold">Category</p>
      {!collections || collections.length === 0 ? (
        <p className="text-body-bold">No collections found</p>
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8">
          {collections.map((collection: CollectionType) => (
            <Link href={`/collections/${collection._id}`} key={collection._id} className="flex flex-col justify-center gap-2 hover:border-green-800 hover:rounded-md p-2.5 border-transparent border-2 transition-all">
              <Image
                key={collection._id}
                src={collection.image}
                alt={collection.title}
                width={350}
                height={200}
                className="rounded-lg cursor-pointer h-[200px] object-cover"
              />
              <p className="text-center font-bold">{collection.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collections;
