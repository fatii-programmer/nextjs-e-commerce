import Image from "next/image";

const DropdownMenu: React.FC = () => {

  return (
    
    <> 
    
     <div className="relative">
  {/* Content for the right side */}
  <div className="max-w-[500px] h-[600px] absolute top-0 right-0 bg-gray-200">
    <div className="px-4">
      <h2 className="text-3xl font-semibold border-b-2 max-w-[300px] py-6 border-gray-400">Shopping Card</h2>
      <div className="flex mt-10 space-x-4 items-center">
        <Image src="/asgardsofa.jpg" alt="prodect" width={200} height={200} />
        <div>
          <h2>Asgaard sofa</h2>
          <p className="text-sm">
            1 x <span className="text-[#B88E2F] text-sm">Rs 25,000.00</span>
          </p>
        </div>
       
      </div>
    </div>
    <div className="space-x-6 lg:space-x-32 px-4 mt-32 lg:mt-40">
      <span>Subtotal</span>
      <span className="text-[#B88E2F]">25,000.00</span>
    </div>
    <div className="mt-6">
      <hr />
    </div>
    <div className="px-4 space-x-5 lg:space-x-20 mt-6">
      <button className="border border-black rounded-2xl px-6 py-1">View Cart</button>
      <button className="border border-black rounded-2xl px-6 py-1">Checkout</button>
    </div>
  </div>
</div>

      
 <div className='mt-8 md:flex space-x-10  ml-8 '>
        <div className='flex space-x-10 r'>
          <div className='space-y-6'>
            <Image src="/side1.jpg" alt='Product' width={85} height={80} />
          <Image src="/side3.jpg" alt='Product' width={85} height={80} />
            <Image src="/side4.jpg" alt='Product' width={85} height={80} />

          </div>
          <div className='bg-[#FFF9E5] w-96 h-96 flex justify-center items-center'>
            <Image src="/asgardsofa.jpg" alt='Product' width={200} height={200} className='w-80 h-80' />
          </div>
        </div>
        <div>
          <h2 className='text-2xl font-bold'>Asgaard Sofa</h2>
          <p className='text-gray-400 mt-1'>Rs. 25,000.00</p>
          <div className='flex mt-1'>
            <Image src="/star.jpg" alt='rating Icons' className='h-5 w-5' width={50} height={50} />
            <Image src="/star.jpg" alt='rating Icons' width={50} height={50} className='h-5 w-5' />
            <Image src="/star.jpg" alt='rating Icons' width={50} height={50} className='h-5 w-5' />
            <Image src="/star.jpg" alt='rating Icons' width={50} height={50} className='h-5 w-5' />
            <Image src="/hstar.jpg" alt='rating Icons' width={50} height={50} className='h-5 w-5' />
            <Image src="/pipeIcon.png" alt='rating Icons' width={50} height={50} className='h-5 w-[2px]' />
            <p className='text-gray-400 ml-3'>5 Customer Review</p>
          </div>
          <p className='w-[350px] lg:w-[500px] mt-1'>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
          </p>
          <p className='text-gray-200 mt-1'>Size</p>
          <div className='mt-1  space-x-4'>
            <span className='bg-[#FBEBB5] rounded  text-lg px-3 py-1   '>L</span>
            <span className='bg-gray-50 rounded  text-lg px-2 py-1   '>XL</span>
            <span className='bg-gray-50 rounded  text-lg px-2 py-1   '>XS</span>
          </div>

          <p className='text-gray-200 mt-1'>Color</p>
          <div className='mt-1  space-x-6 flex' >
            <div className='h-8 w-8 rounded-full bg-[#816DFA]'></div>
            <div className='h-8 w-8 rounded-full bg-black'></div>
            <div className='h-8 w-8 rounded-full bg-[#CDBA7B]'></div>
          </div>
          <div className='flex -mt-4 space-x-4'>
            <div className='h-10 w-32 border rounded-lg border-gray-400 mt-10'>
              <div className='flex p-2 justify-center items-center  space-x-7'>
                <p>-</p>
                <p>1</p>
                <p>+</p>
              </div>
            </div>

            <div className='lg:h-10 h-10 px-10  lg:px-16 border rounded-lg border-gray-800 mt-10'>
              <div className='flex mt-1 justify-center items-center text-sm lg:text-xl font-semibold space-x-2 lg:space-x-7'>
                <h2> Add to Cart</h2>
              </div>
            </div>

          </div>
          <div className='border-t border-gray-400 mt-10'>
            <div className='flex text-gray-400 mt-4'>
              <p>SKU </p>
              <p className='ml-10 '>: SS001</p>
            </div>

            <div className='flex text-gray-400 mt-4'>
              <p>Category </p>
              <p className='ml-2 '>: Sofa</p>
            </div>
            <div className='flex text-gray-400 mt-4'>
              <p>Tag </p>
              <p className='ml-12 '>: Sofa, Chair, Home, Shop</p>
            </div>

            <div className='flex text-gray-400 mt-6'>
              <p>Share </p>
              <p className='ml-8'>:</p>
              <div className='flex space-x-4 ml-2'>
                <Image src="/f.jpg" width={100} height={100}  alt='facbook' className='h-6 w-6 ' />
                <Image src="/link.jpg" width={50} height={50}  alt='facbook' className='h-6 w-6 ' />
                <Image src="/tit.jpg" width={50} height={50}  alt='facbook' className='h-6 w-6 ' />
              </div>
            </div>

          </div>
        </div>
      </div>



       <div className='border-t-2 border-gray-400 mt-20' >
                      <div className='flex justify-center mt-12 space-x-4 lg:space-x-16'>
                          <h2 className='text-xl font-semibold'>Descriptiion</h2>
                          <p className='text-gray-500'> Addition Information</p>
                          <p className='text-gray-500'>Reviews [5]</p>
                      </div>
                      <p className='text-gray-500 flex justify-between max-w-[950px] mx-auto text-center mt-6 mb-8'>
                          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                          <br />
                          <br />
                          Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                      </p>
                      <div className='md:flex justify-center space-y-4 space-x-2 lg:space-x-12  '>
                          <div className='bg-[#FFF9E5]'>
                              <Image src="/cartsofa1.jpg" alt='soofa' width={400} height={400} className='h-[350px] w-[550px] ' />
                          </div>
                          <div className='bg-[#FFF9E5]'>
                              <Image src="/cartsofa1.jpg" alt='soofa' width={400} height={400} className='h-[350px] w-[550px] ' />
                          </div>
      
                      </div>
                  </div>

                  <div className="mt-20 ">
                      <h2 className="text-center text-3xl font-bold">Related Products</h2>
                      <div className="flex justify-center mt-8 space-x-4 lg:space-x-8">
                        <div className="text-center">
                          <Image src="/image1.jpg" alt="Trenton modular sofa" width={350} height={200} />
                          <p>Trenton modular sofa_3</p>
                          <p className="font-bold">Rs. 25,000.00</p>
                        </div>
                        <div className="text-center">
                          <Image src="/image2.jpg" alt="Granite dining table" width={350} height={200} />
                          <p>Granite dining table with dining chair</p>
                          <p className="font-bold">Rs. 25,000.00</p>
                        </div>
                        <div className="text-center">
                          <Image src="/image3.jpg" alt="Outdoor bar table" width={350} height={200} />
                          <p>Outdoor bar table and stool</p>
                          <p className="font-bold">Rs. 25,000.00</p>
                        </div>
                        <div className="text-center">
                          <Image src="/image4.jpg" alt="Plain console" width={350} height={200} />
                          <p>Plain console with teak mirror</p>
                          <p className="font-bold">Rs. 25,000.00</p>
                        </div>
                      </div>
                      <div className="text-center mt-16 mb-12">
                        <button className="text-black-500 underline">View More</button>
                      </div>
                    </div>
                    
                  
    </>
  );
};

export default DropdownMenu;