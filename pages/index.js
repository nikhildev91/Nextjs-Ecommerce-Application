import Carousel from './components/Carousel';
import Itemcards from './components/Itemcards';
import Layout from './components/Layout';

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <div className="container m-auto w-full">
        <p className="text-4xl font-bold mt-10">New Arrivals.</p>
        <div className=" w-full ml-2 md:ml-0 ssh mt-5 flex flex-row overflow-x-auto gap-4">
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
          <Itemcards />
        </div>
        <section className="mt-5 h-screen w-full bg-gray-200 rounded-3xl p-10">
          <div className="w-full h-20 flex items-center justify-center mt-10">
            <p className="font-bold text-5xl">Start Exploring.</p>
          </div>
          {/* <div className="flex items-center justify-center">
            <div className="w-[50%] h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="flex justify-between">
                <div className="px-10 h-12 flex items-center justify-center rounded-full hover:bg-black hover:text-white">
                  Home
                </div>
                <div className="px-12 h-12 flex items-center justify-center rounded-full hover:bg-black hover:text-white">
                  Men
                </div>
                <div className="px-12 h-12 flex items-center justify-center rounded-full hover:bg-black hover:text-white">
                  Women
                </div>
                <div className="px-12 h-12 flex items-center justify-center rounded-full hover:bg-black hover:text-white">
                  Kids
                </div>
                <div className="px-12 h-12 flex items-center justify-center rounded-full hover:bg-black hover:text-white">
                  Beauty
                </div>
                <div className="px-12 h-12 flex items-center justify-center rounded-full hover:bg-black hover:text-white">
                  Sports
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </div>
    </Layout>
  );
}
