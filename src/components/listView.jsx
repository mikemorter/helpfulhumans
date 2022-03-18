import React, { Component } from "react";
import { getColors } from "../services/colors";
import { getRandom } from "./getRandom";
import colors from "../services/colors";
import SideBar from "./sideBar";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import ColorCard from "./colorCard";

const color = getColors(colors);
const n = color.length;

const randomColors = getRandom(color, n);

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [],
      currentPage: 1,
      pageSize: 16,
      itemsCount: 0,
    };
  }

  async componentDidMount() {
    const { data: colors } = await getRandom(color, n);
    this.setState(this.state.colors);
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleClick = () => {
    this.forceUpdate();
  };

  getPagedData = () => {
    const { pageSize, currentPage, colors } = this.state;

    const color = paginate(currentPage, pageSize);

    return { data: color };
  };

  render() {
    const { pageSize, currentPage } = this.state;

    const totalCount = 118;

    return (
      <div>
        <div>
          <div className="row">
            <SideBar />
            <div className="col">
              {randomColors
                .map((color) => (
                  <div className="btn" key={color}>
                    <ColorCard color={color} />
                  </div>
                ))
                .slice(0, 15)}
              <div className="align-center">
                <Pagination
                  itemsCount={totalCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListView;
