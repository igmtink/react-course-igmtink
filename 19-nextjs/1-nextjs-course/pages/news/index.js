import { Fragment } from "react";

// (Link) for navigating without sending a new request
import Link from "next/link";

const DUMMY_NEWS = [
  { id: Math.random(), name: "ReactJS Is A Great Framework" },
  { id: Math.random(), name: "NextJS Is A Great Framework" },
];

const News = () => {
  return (
    <Fragment>
      <h1>The News</h1>
      <ul>
        {DUMMY_NEWS.map((item) => (
          <Link key={item.id} href={`/news/${item.name}`}>
            {item.name}
          </Link>
        ))}
      </ul>
    </Fragment>
  );
};

export default News;
