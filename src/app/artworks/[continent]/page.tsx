import Image from 'next/image';
import Link from 'next/link';

export default function ContinentArtworks({ params }: { params: { continent: string } }) {
  const { continent } = params;
  const displayContinentName = continent.charAt(0).toUpperCase() + continent.slice(1);

  let backgroundImage = "/images/background.jpg";

  let artworks = [
    {
      title: 'Unknown Masterpiece',
      image: '/images/artbenua.jpg',
      desc: 'deskripsi',
    },
  ];

  if (continent === 'asia') {
    backgroundImage = "/images/bgasia.jpg";
    artworks = [
      {
        title: 'Indonesia',
        image: '/images/asia1.jpg',
        desc: 'Penangkapan Pangeran Diponegoro 28 Maret 1830.',
      },
      {
        title: 'Japan',
        image: '/images/asia2.jpg',
        desc: 'A genre of woodblock print and painting that flourished in Japan between the 17th and 19th centuries. ',
      },
      {
        title: 'Kazakhstan',
        image: '/images/asia3.jpg',
        desc: 'The tribes of Kazakhstan lived nomadically because it was the most effective survival strategy in the harsh and changing steppe environment.',
      },
    ];
  } else if (continent === 'europe') {
    backgroundImage = "/images/bgeropa.jpg";
    artworks = [
      {
        title: 'Norway',
        image: '/images/eropa1.jpg',
        desc: 'This painting depicts a screaming, expressing a profound sense of dread and anxiety. including those housed in the National Gallery of Norway in Oslo and the Munch Museum.',
      },
      {
        title: 'German',
        image: '/images/eropa2.jpg',
        desc: 'One of the most representative German Romanticism. depicts a man standing on a cliff, his back to the viewer, looking out over a vast sea of mist. This work symbolizes awe of nature and spiritual search.',
      },
      {
        title: 'Scotland',
        image: '/images/eropa3.jpg',
        desc: 'This painting closely associated with Scottish imagery and is often considered a symbol of the Scottish Highlands. It depicts a majestic stag in a mountainous landscape. It is now part of the collection of the National Galleries of Scotland.',
      },
    ];
  } else if (continent === 'africa') {
    backgroundImage = "/images/bgafrika.jpg";
    artworks = [
      {
        title: 'Egpyt',
        image: '/images/afrika1.jpg',
        desc: 'In ancient Egyptian belief, Anubis was considered the god of death with the head of a jackal and the body of a human. Anubis is the Egyptian name for the jackal-headed god associated with mummies and the afterlife in Egyptian mythology.',
      },
      {
        title: 'Marocco',
        image: '/images/afrika2.jpg',
        desc: 'Intricate geometric patterns and calligraphy adorn the walls of mosques, madrasas, and palaces. While not paintings, they are a highly complex and colorful form of visual art.',
      },
      {
        title: 'South Africa',
        image: '/images/afrika3.jpg',
        desc: 'The history of conventional painting in Cape Town begins with the arrival of colonialists, where European artists documented the landscape and society.',
      },
    ];
  } else if (continent === 'america') {
    backgroundImage = "/images/bgamerika.jpg";
    artworks = [
      {
        title: 'Canada',
        image: '/images/amerika1.jpg',
        desc: 'Rock carvings and paintings found throughout Canada depict animals, human figures and spiritual symbols.',
      },
      {
        title: 'Patagonia',
        image: '/images/amerika2.jpg',
        desc: 'Patagonia was inhabited by several indigenous tribes. In a small portion of northwestern Patagonia, indigenous peoples practiced agriculture, while in the remaining territory, peoples lived as hunter-gatherers, moving by foot in eastern Patagonia and by dugout canoe and dalca in the fjords and channels.',
      },
      {
        title: 'Brazil',
        image: '/images/amerika3.jpg',
        desc: 'During the colonial period, Brazilian painting was heavily influenced by the European Baroque style, but with local influences. These paintings, often found in churches and monasteries, depicted religious themes with lavish detail and vibrant colors.',
      },
    ];
  } else if (continent === 'australia') {
    backgroundImage = "/images/bgaustralia.jpg";
    artworks = [
      {
        title: 'Melbourne',
        image: '/images/australia1.jpg',
        desc: 'A classic example of the Heidelberg School. It depicts a desperate gold digger in the Australian outback, capturing the struggles and realities of settler life in the "bush." It reflects the social and economic conditions of the time.',
      },
      {
        title: 'Adelaide',
        image: '/images/australia2.jpg',
        desc: 'This painting captures a dramatic scene from the life of Australian horse drovers, where a group of horses or cattle breaks away from the herd.',
      },
      {
        title: 'Melbourne',
        image: '/images/australia3.jpg',
        desc: 'A triptych (three-part painting) that tells the bitter story of the struggle of a settler family in the Australian outback, from their arrival, through their struggle for survival, to death and destruction.',
      },
    ];
  } else if (continent === 'antarctica') {
    backgroundImage = "/images/bgantartika.jpg";
    artworks = [
      {
        title: 'Weddel Sea',
        image: '/images/antartika1.jpg',
        desc: 'Marston depicts the struggles of his crew as they prepare to camp on the ice and shows the stunning Antarctic landscape.',
      },
    ];
  }

  const isSingleArtwork = artworks.length === 1;

  return (
    <main
      className="min-h-screen text-white flex flex-col items-center justify-center p-6"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-4xl font-bold mb-10 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)]">
        Artwork from {displayContinentName}
      </h1>

      <div className={isSingleArtwork ? 'flex justify-center' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'}>
        {artworks.map((art, idx) => (
          <div
            key={idx}
            className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg flex flex-col items-center text-center w-[280px] mx-auto mb-6"
          >
            <Image
              src={art.image}
              alt={art.title}
              width={200}
              height={150}
              className="rounded-md object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">{art.title}</h2>
            <p className="text-gray-300 text-sm">{art.desc}</p>
          </div>
        ))}
      </div>

      <Link
        href="/"
        className="mt-12 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
      >
        Back to Home
      </Link>
    </main>
  );
}