import React, { Component } from 'react';
import  { connect } from "react-redux";
import { getTestsStart } from "@/rdx/getTests/getTestsACctions";
import { PsyTestsState } from "@/rdx/store";
import { RenderUserPosts } from "@/Components";

import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

const mapStateToProps = ({ userTests: { isRequesting, testsReqData, error } }: PsyTestsState, ownProps: { userId: string }) => ({
  isRequesting,
  testsReqData,
  error,
  uid: ownProps.userId
});

const mapDispatchToProps = {
  getTestsStart
};

type UserTestsByIdProps = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export class RawUserTestsById extends Component<UserTestsByIdProps> {
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

export const UserTestsById = connect(mapStateToProps, mapDispatchToProps)(RawUserTestsById);