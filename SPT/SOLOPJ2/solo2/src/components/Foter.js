import { Link } from "react-router-dom";
import { codenseContent } from "shared/data";

function Foter({ reRenderdata, selectMember }) {
  //헤더에서 받아오고 부모에서 sate된 선택된 멤버가 랜더데이터랑 같은지
  const filterMeber = selectMember
    ? reRenderdata.filter((item) => item.writedTo === selectMember)
    : reRenderdata;

  return (
    <div>
      <ul>
        {filterMeber.map((item) => {

          return (
            <li key={item.id}>
            
              <div>
                <img src={item.avatar} alt={""} />
              </div>
              <Link to={`/details/${item.id}`}>
                <div>
                  <h3>{item.nickname}</h3>
                  <p>{codenseContent(item.content, 70)}</p>
                  <p>작성 대상: {item.writedTo}</p>
                  <p>작성 일자: {item.createdAt}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Foter;