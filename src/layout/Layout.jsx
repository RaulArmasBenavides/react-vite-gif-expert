import Header from '../components/Header';

export const AppLayout = ({ children })  => {
    return (
      <div>
        <Header />
        { children }
      </div>
    );
  };