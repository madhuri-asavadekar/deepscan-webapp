import React, { Component } from 'react';
import ScrollContainer from 'elmer/dist/components/ScrollContainer';
import {
    FieldSetBuilder,
    CollectionConfigBuilder,
    FieldBuilder
} from 'elmer/dist/lib/CollectionConfig';
import Button from 'elmer/dist/components/Button';

const { Scrollable, Fixed } = ScrollContainer;

class HostsTable extends Component {
    render() {
        const { hosts, error } = this.props;

        return (
            <ScrollContainer className="scroll-container">
                <Fixed className="text-right">
                    <Button label="Download CSV" />
                </Fixed>

                <Scrollable>
                    <div className="elmer-grid-view elmer-grid-view__fixed-header elmer-ScrollContainer__Fixed">
                        <table>
                            <thead>
                                <tr>
                                    <th
                                        className="elmer-grid-view__column--large"
                                        data-sortable
                                        title="Node ID"
                                        data-colname="nodeId"
                                    >
                                        <div className="flex-container flex-dir-row align-justify align-middle">
                                            <div className="flex-child-auto ellipsis-on-overflow">
                                                Node ID
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        className="elmer-grid-view__column--large"
                                        data-sortable
                                        title="Model"
                                        data-colname="model"
                                    >
                                        <div className="flex-container flex-dir-row align-justify align-middle">
                                            <div className="flex-child-auto ellipsis-on-overflow">
                                                Model
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        className="elmer-grid-view__column--large"
                                        data-sortable
                                        title="Clusters"
                                        data-colname="clusters"
                                    >
                                        <div className="flex-container flex-dir-row align-justify align-middle">
                                            <div className="flex-child-auto ellipsis-on-overflow">
                                                Clusters
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        className="elmer-grid-view__column--large"
                                        data-sortable
                                        title="Entries"
                                        data-colname="entries"
                                    >
                                        <div className="flex-container flex-dir-row align-justify align-middle">
                                            <div className="flex-child-auto ellipsis-on-overflow">
                                                Entries
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        className="elmer-grid-view__column--large"
                                        data-sortable
                                        title="VM Count"
                                        data-colname="vmcount"
                                    >
                                        <div className="flex-container flex-dir-row align-justify align-middle">
                                            <div className="flex-child-auto ellipsis-on-overflow">
                                                VM Count
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                        className="elmer-grid-view__column--large"
                                        data-sortable
                                        title="Latest Report"
                                        data-colname="latestReport"
                                    >
                                        <div className="flex-container flex-dir-row align-justify align-middle">
                                            <div className="flex-child-auto ellipsis-on-overflow">
                                                Latest Report
                                            </div>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {hosts.map((host, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="elmer-grid-view__column--large ellipsis-on-overflow">
                                                <span>{host.nodeId}</span>
                                            </td>
                                            <td className="elmer-grid-view__column--large ellipsis-on-overflow">
                                                <span>{host.model}</span>
                                            </td>
                                            <td className="elmer-grid-view__column--large ellipsis-on-overflow">
                                                <span>{host.cluster}</span>
                                            </td>
                                            <td className="elmer-grid-view__column--large ellipsis-on-overflow">
                                                <span>{host.entries}</span>
                                            </td>
                                            <td className="elmer-grid-view__column--large ellipsis-on-overflow">
                                                <span>{host.vmcount}</span>
                                            </td>
                                            <td className="elmer-grid-view__column--large ellipsis-on-overflow">
                                                <span>{host.latestReport}</span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </Scrollable>
            </ScrollContainer>
        );
    }
}

export default HostsTable;
