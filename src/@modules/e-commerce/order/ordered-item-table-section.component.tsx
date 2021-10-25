import React from 'react';
import { Row, Col } from "antd";
import { AiOutlineStar } from "react-icons/ai";
import { BsChatDots, BsCheck } from "react-icons/bs";

const OrderedItemTable = ({singleOrderInfo}) => {
    return (
        <Row className="order-item-table">
                <Col span={24}>
                  <h2 className="mb-4 text-lg font-semibold">
                    Product Description
                  </h2>
                  <div className="block p-4 bg-white rounded-lg shadow">
                    <div></div>
                    <div className="overflow-x-scroll">
                      <table className="w-full">
                        <tbody>
                          <tr className="text-sm font-medium text-gray-600 border-b border-gray-400 border-solid">
                            <td className="p-4">Description</td>
                            <td className="p-4 text-center whitespace-no-wrap">
                              Quantity
                            </td>
                            <td className="p-4 text-center whitespace-no-wrap">
                              Amount
                            </td>
                            <td className="p-4 text-center whitespace-no-wrap">
                              Status
                            </td>
                          </tr>
                          <tr className="hover:bg-blue-lightest">
                            <td className="py-4 border-b ">
                              <div className="flex flex-col justify-start md:flex-row">
                                <div className="p-2">
                                  <img
                                    src="https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/1de3908d41ec-t-004.png"
                                    className="product-img"
                                  />
                                </div>
                                <div className="Details___StyledDiv-qf0sbv-4 daeQWe items-center self-center block px-2">
                                  <div>
                                    <a href="/products/teer-mustard-oil-500ml-652dcd8f2">
                                      <p className="text-sm text-gray-700 md:text-base">
                                        Teer Mustard Oil - 500ml{" "}
                                      </p>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center align-middle border-b">
                              <div className="flex flex-col ">
                                <p className="text-gray-700 whitespace-no-wrap ">
                                  ৳114.00 X 8
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center align-middle border-b">
                              <div className="flex flex-col ">
                                <p className="font-semibold text-black whitespace-no-wrap">
                                  ৳912.00
                                </p>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center align-middle border-b">
                              <div className="flex flex-col ">
                                <span>
                                  <span
                                    color="
                                      #ED8936
                                    "
                                    className="Badge__SBadge-sc-1l4uk6r-0 kfLrsY text-xs inline-block text-upper uppercase"
                                  >
                                    pending
                                  </span>
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-col justify-between md:flex-row">
                        <div className="flex items-center justify-center mb-2 font-semibold">
                          <span>Status : &nbsp;</span>
                          <span className="p-2 rounded-md bg-orange text-white text-xs inline-block text-upper uppercase">
                            unpaid
                          </span>
                        </div>
                        <div className="flex flex-col lg:flex-row">
                          <p className="flex justify-between mx-4 text-gray-700 lg:block">
                            <span className="mr-8">Total price </span>
                            <span className="flex text-lg font-semibold text-gray-900">
                              ৳ 912
                            </span>
                          </p>
                          <p className="flex justify-between mx-4 text-gray-700 lg:block">
                            <span className="mr-8">Total paid </span>
                            <span className="flex text-lg font-semibold text-gray-900">
                              ৳ 0.00
                            </span>
                          </p>
                          <p className="flex justify-between mx-4 text-gray-700 lg:block">
                            <span className="mr-8">Due </span>
                            <span className="flex text-lg font-semibold text-gray-900">
                              ৳ 912.00
                            </span>
                          </p>
                          <div className="text-right"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
    );
};

export default OrderedItemTable;