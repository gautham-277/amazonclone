
import {Carousel,HomepageCard,CarouselCategory,CarouselProducts} from "./"
const Homepage = () => {
  return (
    <div className='bg-amazonclone-background'>
      <div className="min-w-[1000px] max-w-[1500px]  m-auto ">
        <Carousel/>
      <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
      <HomepageCard title={"we have a suprise for you"}
      img={"../images/home_grid_1.jpg"}
      link={"see terms and conditons"}/>
           <HomepageCard
            title={"Watch The Rings of Power"}
            img={"../images/home_grid_2.jpg"}
            link={"Start streaming now"}
          />
          <HomepageCard
            title={"Unlimited Streaming"}
            img={"../images/home_grid_3.jpg"}
            link={"Find out more"}
          />
          <HomepageCard
            title={"More titles to explore"}
            img={"../images/home_grid_4.jpg"}
            link={"Browse Kindle Unlimited"}
          />
          <HomepageCard
            title={"Shop Pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"See more"}
          />
          <HomepageCard
            title={"Spring Sale"}
            img={"../images/home_grid_6.jpg"}
            link={"See the deals"}
          />
          <HomepageCard
            title={"Echo Buds"}
            img={"../images/home_grid_7.jpg"}
            link={"See more"}
          />
          <HomepageCard
            title={"Family Plan: 3 months free"}
            img={"../images/home_grid_8.jpg"}
            link={"Learn more"}
          />
       
          <div className="m-3 pt-8">
            <img className="xl:hidden" src={"../images/banner_image_2.jpg"}/>
          </div>
      </div>
      <CarouselProducts/>
      <CarouselCategory/>
      <div className="h-[200px]">
          <img
            className="h-[100%] m-auto"
            src={"../images/banner_image.jpg"}
            alt="Banner 1"
          />
        </div>
      </div>
        </div>
  )
}

export default Homepage