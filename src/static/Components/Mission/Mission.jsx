import { Player} from '@lottiefiles/react-lottie-player';

function Mission(){
  
    return (
        <section className="mission-section">
           <header>What we do ?</header>
           <div className="mission-1">
                <Player className="m1-img" autoplay loop src="https://assets8.lottiefiles.com/private_files/lf30_4y2cuiyr.json" style={{ height: '300px', width: '300px' }}></Player>
                <p>We Eat, Sleep, Code and Repeat.We love to code and explore new tech stacks everyday.We create cool projects and work as a team. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit incidunt iure quaerat aliquid hic iusto deserunt ad quod nemo alias?</p>
            </div>
           
           <div className="dots">&hellip;</div>
            <header>Why we do ?</header>
           <div className="mission-2">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum sed dignissimos, tempora animi iusto deserunt voluptatibus quas dolorum accusamus, consequatur quos amet nesciunt, ipsa dolores quis exercitationem consectetur maiores dolor. Distinctio eligendi expedita neque unde possimus id ea, autem illo?</p>
                <Player className="m1-img" autoplay loop src="https://assets8.lottiefiles.com/private_files/lf30_wqypnpu5.json" style={{ height: '300px', width: '300px' }}></Player>
            </div>
           
        </section>
    )
}

export default Mission;