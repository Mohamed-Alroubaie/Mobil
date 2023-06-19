import SearchOptions from '@/components/SearchOptions';

const optionValue = ['dog', 'cat', 'hamster', 'parrot', 'spider', 'goldfish'];

export default async function Home() {
  return (
    <>
      <div className='main'>
        <SearchOptions inputName='Marke' inputValue={optionValue} />
        <SearchOptions inputName='Modell' inputValue={optionValue} />
        <SearchOptions inputName='Erstzulassung ab' inputValue={optionValue} />
        <SearchOptions inputName='Kilometer bis' inputValue={optionValue} />
        <SearchOptions inputName='Zahlungsart' inputValue={optionValue} />
        <SearchOptions inputName='Preis bis' inputValue={optionValue} />
        <SearchOptions inputName='Ort oder PLZ' inputValue={optionValue} />
        <div>
          <br />
          <button className='angebote'>Angebote</button>
        </div>
      </div>
    </>
  );
}
