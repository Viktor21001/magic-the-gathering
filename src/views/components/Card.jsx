const React = require('react');

function Card({ post }) {
  return (
    <div className="postCard">
      <div className="describeCard">
        <img src={post.imageLink} alt="cardLogo" style={{ width: '20%', height: '20%' }} />
        <div className="cardText">
          <a href={`/posts/info/${post.id}`}>
            <h3>{post.title}</h3>
          </a>
          <p>{post.body}</p>
        </div>
      </div>
      <div className="publish">
        <span> Опубликовано {post.createdAt.toLocaleDateString()}</span>
      </div>
    </div>
  );
}

module.exports = Card;
