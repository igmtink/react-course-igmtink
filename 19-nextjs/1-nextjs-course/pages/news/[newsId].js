import { useRouter } from "next/router";

const NewsDetail = () => {
  const router = useRouter();

  // To get (parameter)
  const params = router.query.newsId;

  return (
    <div>
      <h1>News Detail</h1>
      <h2>{params}</h2>
    </div>
  );
};

export default NewsDetail;
