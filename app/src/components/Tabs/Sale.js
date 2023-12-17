import useDestiny from '@/hooks/useDestiny';
import useSale from '@/hooks/useSale';
import useTrip from '@/hooks/useTrip'
import style from '@/styles/users/formRegister.module.css'
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CardSales from '../CardSales';


export default function Sale() {
    const { trip, lodging, handleSubmit, setCheckedLodging, checkedLodging, city, setCity, destinys, setValueTrip, setValueLodging, sale, response, alert } = useSale();
    const destinyCity = useDestiny().destinys;
    const [cidade, setCidade] = useState("")

    const sales = trip.filter(element => element.possuiHospedagem)

    const [selectedOption, setSelectedOption] = useState('');
    const [options, setOptions] = useState([]);

    const handleOptionChange = (event) => {
        const value = event.target.value;

        // Atualiza o estado da opção selecionada
        setSelectedOption(value);

        // Adiciona a opção ao array de opções se ainda não estiver presente
        if (!options.includes(value)) {
            setOptions([...options, value]);
        }
    };
    const handleRemoveOption = (optionToRemove) => {
        // Remove a opção do array de opções
        const updatedOptions = options.filter((option) => option !== optionToRemove);
        setOptions(updatedOptions);
    };

    console.log(sale)
    return (
        <>
            <div className={style.main}>

                {/* cadastrar Promoção */}
                <form className={style.form + " mx-5"} onSubmit={handleSubmit}>

                    <p className={style.title}>Cadastrar Promoção</p>
                    {response && (
                        <p className={'alert ' + alert}>{response}</p>
                    )}
                    <h5>Selecione a viagem da promoção</h5>
                    {/* selecioanar viagem */}
                    {trip &&
                        <div className='d-flex gap-3 flex-wrap' >
                            {sales.map(element => (
                                <div key={element.id}>
                                    <input type="radio" className='btn-check' name="viagem" value={element} id={element.id} onChange={() => setValueTrip(element.id)} />
                                    <label className="btn btn-outline-primary" htmlFor={element.id}>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h5 className="mb-1">{element.possuiHospedagem ? "Possui hospedagem" : "Não Possui hospedagem"}</h5>
                                            <small>ID: {element.id}</small>
                                        </div>

                                        <p className="mb-1">Check-in: {new Date(element.dataEntrada).toLocaleString().replace(",", " - ")}</p>
                                        <p className="mb-1">Check-out: {new Date(element.dataSaida).toLocaleString().replace(",", " - ")}</p>

                                        <select className="form-select" onChange={(e) => setCity(e.target.value)}>
                                            <option>Selecione cidade</option>
                                            {destinyCity.map(city => (
                                                <option value={city.cidade}>{city.cidade}</option>
                                            ))}
                                        </select>
                                        {/* <select className='form-select my-1' value={selectedOption} onChange={handleOptionChange}>
                                        <option value="" disabled>Selecione uma opção</option>
                                        
                                        </select>
                                        <p>Opções selecionadas:</p>
                                        <ul className='list-group'>
                                        {options.map((option, index) => (
                                            <li className='my-1 badge text-bg-secondary list-item' key={index}>
                                            {option}<i className="bi bi-x" onClick={() => handleRemoveOption(option)}></i>
                                            </li>
                                            ))}
                                        </ul> */}

                                        <div className='d-flex flex-column'>
                                            <small>Preço normal: {element.precoTotal}</small>
                                            <small>Preco da promoção: {element.precoTotal - (element.precoTotal * element.desconto / 100)}</small>
                                        </div>
                                    </label>
                                </div>

                            ))}
                        </div>
                    }

                    {/* selecionar hospedagem se possuir */}
                    <h5>Selecione a hospedagem da promoção</h5>
                    {destinys &&
                        <div className='d-flex gap-3 flex-wrap' >
                            {destinys.map(destiny => (
                                <div key={destiny.id}>
                                    {/* colocar no useSale setcidade */}
                                    <input type="checkbox" checked={cidade.toString() === destiny.id.toString()} onChange={() => {
                                        setCidade(destiny.id)
                                        setValueLodging(destiny.id)
                                    }

                                    } className='btn-check' name="viagem" value={destiny} id={destiny.id} />
                                    <label className="btn btn-outline-primary" htmlFor={destiny.id}>
                                        <div className="d-flex gap-3 w-100 justify-content-between">
                                            <h5 className="mb-1">{destiny.cidade}</h5>
                                            <small>ID: {destiny.id}</small>
                                        </div>
                                        <p>{destiny.nomeLocal}</p>
                                        <p>{destiny.endereco}</p>
                                    </label>
                                </div>

                            ))}
                        </div>
                    }

                    <button className={style.submit} style={{ maxWidth: "150px" }}>Cadastrar</button>

                </form>
            </div>


            <div className={style.main + " px-5 + flex-wrap gap-3"}>

                {sale.map((element, index) => (
                    <div className="card" key={index} style={{ width: "18rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Promoções vigentes</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Local: {element[5]}</h6>

                            <ul className='list-group'>
                                <li className='list-group-item'>{element[1]}</li>
                            </ul>
                            <p>Cidade: {element[6]}</p>
                            <p>Preço normal: R$ {element[3]}</p>
                            <p>Desconto: {element[0]}%</p>

                            <a href="#" className="card-link">
                                Editar
                            </a>
                            <a href="#" className="card-link">
                                Deletar
                            </a>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}
