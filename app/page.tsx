
import { Heart, Star, User } from 'lucide-react';
import MainSlider from './components/MainSlider';
import CategorySection from './components/CategorySection';


export default function Home() {
  return (
   
    <div className="w-full px-4 mt-4">
      <main className="w-full bg-white">
          <MainSlider />
      </main>
      
       <CategorySection />


  


   
    </div>
  );
}


