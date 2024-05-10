import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
  {
    id: 1,
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MTNfMjc3%2FMDAxNjk0NTY2MzQwMzY4.zxClLIMYLypZe6PJX2gxx6d31ME04wVkVIQjNv_wP3cg.E4oRgl8DhOjwoz5hLXJvfOfbvQnT7hnFRg5_lygwReIg.JPEG.chalry65%2F%253F%258B%25A4%253F%259A%25B4%25EB%25A1%259C%25EB%2593%259C.jpg&type=sc960_832",
    name: "유재석",
    birthday: "961222",
    gender: "남자",
    job: "잡담호소인",
  },
  {
    id: 2,
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MTRfMjk2%2FMDAxNjg2NzMyMjM4ODk0.AvxMrCF-7bqfnGBKzEXGAUU-py1aB2K5molGUfQIIlQg.H2Bu8kTMUm-h3aLNNBDK3-8BdKCs3iJqiIae1i1jo8Qg.JPEG.wlswoejr456%2F002.jpg&type=sc960_832",
    name: "박명수",
    birthday: "981222",
    gender: "남자",
    job: "탈모호소인",
  },
  {
    id: 3,
    image:
      "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.namu.wiki%2Fi%2FqQ_dc6goHeyhMRw87xGsQu31p2_G1G_Y5uKdjqh0meNAO8bLUNAaSk3v5q3-sRyLWKKylT38BRAv4r40TlimYg.webp&type=sc960_832",
    name: "정준하",
    birthday: "981222",
    gender: "남자",
    job: "식신호소인",
  },
];

function App() {
  return (
    <>
      {customers.map((c) => {
        //map을 쓸 때는 key가 있어야 함
        return (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </>
  );
}

export default App;
