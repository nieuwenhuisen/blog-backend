import React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import {format} from "timeago.js";

const Datatable = ({ headers, rows }) => {
    const normalizeHeader = (header) => header.toLowerCase().replace(' ', '_');

    return (
        <Table>
            <TableHead>
                <TableRow>
                    {headers.map(header => (
                        <TableCell>{header}</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map(row => (
                    <TableRow key={row['@id']}>
                        {headers.map(header => {
                            const normalizedHeader = normalizeHeader(header);
                            let value = row[normalizedHeader];

                            if (normalizedHeader.includes('_date') && value) {
                                value = format(value);
                            }

                            return <TableCell>{value}</TableCell>;
                        })}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Datatable;
