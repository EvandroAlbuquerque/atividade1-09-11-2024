import ProfileCard from './components/ProfileCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProfileCard
        name="Zé da Silva"
        bio="Desenvolvedor apaixonado por programação"
        imageUrl={'https://media.istockphoto.com/id/535677963/pt/vetorial/cansado-homem-beber-caf%C3%A9.jpg?s=2048x2048&w=is&k=20&c=rPSyBvk-H6V_pDjtu2LqocbNWPufZCA7dFH1gCArxEY='}
      />
      </header>
    </div>
  );
}

export default App;
