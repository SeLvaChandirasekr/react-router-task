

import PropTypes from 'prop-types'

export default function BlogCard({blog={}}) {
  return (
<div className="card blog-card">
    <img src={blog.image} className='card-img-top' alt={blog.name} />
    <div className="card-body">
    <div className='card-title'>{blog.name}
    <div className='card-text-deails'>{blog.details}
 <button className='btm btn-primary'>Read</button>
    </div>
    </div>
    </div>

</div>
  )
}

BlogCard.propTypes = {
    blog: PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
    }),
};


