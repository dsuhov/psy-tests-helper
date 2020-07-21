import React, { Component } from 'react';
import  { connect } from "react-redux";
import { getTestsStart } from "@/rdx/getTests/getTestsACctions";
import { PsyTestsState } from "@/rdx/store";
import { RenderUserPosts } from "@/Components";

import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const mapStateToProps = ({ userTests: { isRequesting, testsReqData, error }, user }: PsyTestsState) => ({
  isRequesting,
  testsReqData,
  error,
  uid: user.user!.uid
});

const mapDispatchToProps = {
  getTestsStart
};

type ShowUserPostsProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export class RawShowUserPosts extends Component<ShowUserPostsProps> {
  componentDidMount() {
    const { uid } = this.props;
    this.props.getTestsStart(uid);
  }

  render() {
    const { testsReqData, isRequesting } = this.props;
    let dataSorted: ITestData[] | null = null;

    if (testsReqData !== null && testsReqData.length > 0) {
      const dataCopy = testsReqData.map(({ date, title, idName, result }) => {
        return {
          date,
          title,
          idName,
          result
        }
      })

      dataSorted = dataCopy.sort((a, b) => {
        if (new Date(a.date) > new Date(b.date)) {
          return -1;
        }
        if (new Date(a.date) < new Date(b.date)) {
          return 1;
        }
  
        return 0;
      });
    }
    
    return (
      <>
        {isRequesting &&
          <Box display="flex" justifyContent="center" py={2}>
            <CircularProgress />
          </Box>
        }
        {dataSorted && <RenderUserPosts testData={dataSorted} />}
      </>
    );
  }
}

export const ShowUserPosts = connect(mapStateToProps, mapDispatchToProps)(RawShowUserPosts);