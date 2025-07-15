import data from '../assets/data'
import { useMenuContext, useCartContext } from "../hooks/hooks"
import { useEffect } from "react"

function OrderModal() {
    const itemOptions = data.options

    const { setModalOn, modalMenu, options, setOptions, quantity, setQuantity } = useMenuContext()
    const { addToCart } = useCartContext()

    /** unmount 시, 모달 옵션 상태 초기화 */
    useEffect(
        () => {
            return () => { 
                setOptions({ '온도': 0, '진하기': 0, '사이즈': 0 }) 
                setQuantity(1)
            }
        },
        []
    )

    return (
        <>
            {modalMenu ? (
                <section className="modal-backdrop" onClick={() => setModalOn(false)}>
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <div className='modal-item'>
                            <img src={modalMenu.img} />
                            <div>
                                <h3>{modalMenu.name}</h3>
                                <div>{modalMenu.description}</div>
                            </div>
                        </div>
                        <ul className="options">
                            {Object.keys(itemOptions).map(el => <Option
                                key={el}
                                options={options}
                                setOptions={setOptions}
                                name={el}
                                itemOptions={itemOptions[el]}
                            />)}
                        </ul>
                        <div className="submit">
                            <div>
                                <label htmlFor="count" >개수</label>
                                <input id="count" type="number" value={quantity} min='1' onChange={(event) => setQuantity(Number(event.target.value))} />
                            </div>
                            <button onClick={() => {
                                addToCart({ options, quantity, id: modalMenu.id })
                                setModalOn(false)
                            }}>장바구니 넣기</button>
                        </div>
                    </div>
                </section>
            ) : null}
        </>
    )
}

function Option({ name, itemOptions }) {
    const { options, setOptions } = useMenuContext()
    return (
        <li className='option'>
            {name}
            <ul>
                {itemOptions.map((option, idx) => (
                    <li key={option}>
                        <input type='radio' name={name} checked={options[name] === idx} onChange={() => setOptions({ ...options, [name]: idx })} />
                        {option}
                    </li>
                ))}
            </ul>
        </li>
    )
}

export default OrderModal