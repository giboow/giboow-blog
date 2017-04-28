/**
 * Created by philippe on 21/03/2017.
 */
import moment from 'moment'
import Link from 'next/link'

export default ({post}) => {

    const {meta, path} = post
    const {date, title, author, category} = meta

    return (
        <div className="card hoverable small">

            <div className="card-image-fab">
                <div className="card-image">
                    <img src="http://lorempixel.com/150/220/technics/6"/>
                </div>
                <Link prefetch href={path}>
                    <a title="Lire" className="btn-floating halfway-fab waves-effect waves-light red" >
                        <i className="material-icons">chevron_right</i>
                    </a>
                </Link>
            </div>

            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">{title}</span>

                <div className="row valign-wrapper">
                    <div className="col s2 center">
                        <img src="http://lorempixel.com/150/150/nature/6" alt="" className="circle responsive-img" />
                    </div>
                    <div className="col s10 ">
                        <span className="grey-text text-darken-2">
                            {moment(date).fromNow()} par <strong>{author}</strong> dans <strong>{category}</strong>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
