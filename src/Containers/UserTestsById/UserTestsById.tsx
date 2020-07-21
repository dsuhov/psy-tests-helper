import React, { Component } from 'react';
import  { connect } from "react-redux";
import { getTestsStart } from "@/rdx/getTests/getTestsACctions";
import { PsyTestsState } from "@/rdx/store";
import { UserTestsAcc } from "@/Components/ShowUserTests";

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
    let preparedData: ITestsDataSorted | null = null;

    if (testsReqData !== null && testsReqData.length > 0) {
      const dataCopy = testsReqData.map(({ date, title, idName, result }) => {
        return {
          date,
          title,
          idName,
          result
        }
      })

      const dataSorted = dataCopy.sort((a, b) => {
        if (new Date(a.date) > new Date(b.date)) {
          return -1;
        }
        if (new Date(a.date) < new Date(b.date)) {
          return 1;
        }
  
        return 0;
      });

      preparedData = dataSorted!.reduce<ITestsDataSorted>((result: any, current) => {
        
        if (!result[current.idName]) {
          result[current.idName] = {
            title: current.title,
            legen: "Place for description",
            content: []
          }
        }

        result[current.idName].content.push({ date: current.date, result: current.result });
  
        return result;
  
      }, {});
    }

    
    
    
    return (
      <>
        {isRequesting &&
          <Box display="flex" justifyContent="center" py={2}>
            <CircularProgress />
          </Box>
        }
        {preparedData && <UserTestsAcc data={preparedData} />}
      </>
    );
  }
}

export const UserTestsById = connect(mapStateToProps, mapDispatchToProps)(RawUserTestsById);