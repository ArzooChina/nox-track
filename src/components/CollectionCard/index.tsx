import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faFilm, faClock } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import useWindowWidth from '@src/hooks/useWindowWidth';
import { Collection } from '@src/types';
import { minutesToHours } from '@src/utils/time';

interface CollectionCardProps {
  collection: Collection;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection }: CollectionCardProps) => {
  const width = useWindowWidth();
  return (
    <div className="my-1 p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 lg:my-4 xl:w-1/5">
      <article className="overflow-hidden rounded-lg shadow-lg bg-purple-900 w-full">
        <Link href={`/collection/[slug]`} as={`/collection/${collection.slug}`}>
          <a
            className="bg-center bg-cover bg-no-repeat w-full inline-block"
            style={{
              backgroundImage: `url(${collection.picture})`,
              height: width > 768 ? 350 : 420,
            }}
            aria-label={collection.name}
          />
        </Link>
        <header className="flex items-center justify-between p-2 md:p-4 uppercase">
          <Link href={`/collection/[slug]`} as={`/collection/${collection.slug}`}>
            <a className="text-center w-full no-underline hover:underline text-white font-bold">
              {collection.name}
            </a>
          </Link>
        </header>
        <footer className="flex items-center leading-none pb-4 pt-2">
          <div className="flex flex-1 justify-around">
            <span>
              <FontAwesomeIcon icon={faBook} className="text-blue-400" />
              <span className="text-center text-white pl-2">{collection.booksCount}</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faFilm} className="text-orange-400" />
              <span className="text-center text-white pl-2">{collection.moviesCount}</span>
            </span>
            <span>
              <FontAwesomeIcon icon={faClock} className="text-yellow-400" />
              <span className="text-center text-white pl-2">
                {minutesToHours(collection.minutes)}
              </span>
            </span>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default CollectionCard;
