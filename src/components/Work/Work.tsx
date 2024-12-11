import './Work.scss'
const CN = 'jt-work'

export const Work = ({onOpenPopup})=>{

    return <div className={CN}>
        <h2>Work</h2>

        <p>Минервасофт </p>
        <p>Кортэл </p>
        <p>Открыта для новых проктов</p>
        <p>Детали готова обсудить в <span onClick={()=>onOpenPopup(true)}>личной переписке</span>.</p>
    </div>
}