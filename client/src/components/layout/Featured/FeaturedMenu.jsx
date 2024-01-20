import { menusData } from './FeaturedMenuData';

const FeaturedMenus = () => {

  const handleViewProfile = (chefName) => {
    // Navigate to the specific chef's profile page or perform any other action
    console.log(`View profile of Chef ${chefName}`);
  };

  // Filter menus based on screen size
  const filteredMenus = menusData.filter((menu) => {
    if (menu.id === 2 && window.innerWidth < 768) {
      return false;
    }
    if (menu.id === 4 && window.innerWidth >= 768) {
      return false; 
    }
    return true;
  });

  return (
    <section id="menu" className="mt-8 py-16">
      <div className="container mx-auto max-w-[800px]">
       <div className='text-center mb-14'>
       <h2 className="text-5xl font-bold  text-white">Featured <span className='text-orange-500'>Menus</span></h2>
       </div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          {filteredMenus.map((menu) => (
            <div key={menu.id} className="py-2 flex flex-col lg:flex-row">
              {menu.id === 1 && (
                <>
                  <img src={menu.image} alt={menu.title} className="w-[210px] h-[210px] object-cover lg:mr-8 ml-10 lg:ml-0" />
                  <div className='mt-6 lg:mt-0 mx-6 lg:mx-0' style={{ marginLeft: '40px' }}>
                    <h3 className="text-xl font-semibold mb-2 text-white ">{menu.title}</h3>
                    <p className="text-gray-600 mb-4">{menu.description}</p>
                    <p className="text-orange-500 font-semibold">{menu.price}</p>
                    <p className="text-sm text-gray-500 mt-2 hover:text-orange-500" onClick={() => handleViewProfile(menu.chef)}>{`By ${menu.chef}`}</p>
                  </div>
                </>
              )}
              {menu.id === 2 && (
                <>
                  <div className=' lg:mt-0 mx-6 pl-4 lg:mx-0'>
                    <h3 className="text-xl font-semibold mb-2 text-white ">{menu.title}</h3>
                    <p className="text-gray-600 mb-4">{menu.description}</p>
                    <p className="text-orange-500 font-semibold">{menu.price}</p>
                    <p className="text-sm text-gray-500 mt-2 hover:text-orange-500" onClick={() => handleViewProfile(menu.chef)}>{`By ${menu.chef}`}</p>
                
                  </div>
                  <img src={menu.image} alt={menu.title} className="w-[210px] h-[210px] object-cover ml-9 lg:ml-8" />
                </>
              )}
              {menu.id === 3 && (
                <>
                  <img src={menu.image} alt={menu.title} className="w-[250px] h-[250px] object-cover lg:mr-8 ml-10 lg:ml-0" />
                  <div className='mt-6 lg:mt-0 mx-6 lg:mx-0' style={{ marginLeft: '40px' }}>
                    <h3 className="text-xl font-semibold mb-2 text-white ">{menu.title}</h3>
                    <p className="text-gray-600 mb-4">{menu.description}</p>
                    <p className="text-orange-500 font-semibold">{menu.price}</p>
                    <p className="text-sm text-gray-500 mt-2 hover:text-orange-500" onClick={() => handleViewProfile(menu.chef)}>{`By ${menu.chef}`}</p>
                    
                  </div>
                </>
              )}
              {menu.id === 4 && (
                <>
                  <img src={menu.image} alt={menu.title} className="w-[250px] h-[250px] object-cover lg:mr-8 ml-10 lg:ml-0" />
                  <div className='mt-6 lg:mt-0 mx-6 lg:mx-0' style={{ marginLeft: '40px' }}>
                    <h3 className="text-xl font-semibold mb-2 text-white ">{menu.title}</h3>
                    <p className="text-gray-600 mb-4">{menu.description}</p>
                    <p className="text-orange-500 font-semibold">{menu.price}</p>
                    <p className="text-sm text-gray-500 mt-2 hover:text-orange-500" onClick={() => handleViewProfile(menu.chef)}>{`By ${menu.chef}`}</p>
                    
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenus;
