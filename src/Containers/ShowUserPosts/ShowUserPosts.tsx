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
    
    return (
      <>
        {isRequesting &&
          <Box display="flex" justifyContent="center" py={2}>
            <CircularProgress />
          </Box>
        }
        {testsReqData && <RenderUserPosts testData={testsReqData} />}
      </>
    );
  }
}

export const ShowUserPosts = connect(mapStateToProps, mapDispatchToProps)(RawShowUserPosts);