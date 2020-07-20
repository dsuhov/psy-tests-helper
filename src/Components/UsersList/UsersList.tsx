import React, { FC } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

// const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((props, ref) => (
//   <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
// ));

export const UsersList: FC<{ users: IUsersData[] }> = ({ users }) => {
  return (
    <TableContainer component={Paper} style={{ marginBottom: 20 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Имя</TableCell>
            <TableCell align="center">Почта</TableCell>
            <TableCell align="center">Комментарий</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map(({ email, comment, displayName, id }) => (
            <TableRow key={id}>
              <TableCell align="left">
                <Link component={RouterLink} to={`/users/${id}`}>{displayName}</Link>
              </TableCell>
              <TableCell align="center">{email}</TableCell>
              <TableCell align="center">{comment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}