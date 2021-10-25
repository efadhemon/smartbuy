import React from "react";
import { Row, Col } from "antd";
import { AiOutlineStar } from "react-icons/ai";
import { BsChatDots } from "react-icons/bs";

const OrderInfo = ({singleOrderInfo}) => {
  return (
    <>
      <div className="flex justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">
            <span className="hidden sm:inline-block">Invoice:</span>{" "}
            <span>{singleOrderInfo.orderNo}</span>
          </h3>
          <p className="text-sm font-semibold text-gray-700 md:text-base">
            15 Jul 2021, 06:40 PM
          </p>
        </div>
        <div className="hidden">
          <div className="flex">
            <p>Order Complete</p>
          </div>
        </div>
      </div>
      <Row className="orders-info">
        <Col className="order-from-card" sm={12} md={24} lg={12}>
          <h4 className="mb-4 font-semibold">Ordered From</h4>
          <div className="flex">
            <div className="mr-2 ">
              <img
                className="rounded-full"
                src="https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiAibWVkaWEuZXZhbHkuY29tLmJkIiwgImtleSI6ICJtZWRpYS9pbWFnZXMvNjNmZDdhMzFmNzE5LWNpdHktZ3JvdXAtcHJpb3JpdHktc3RvcmUucG5nIiwgImVkaXRzIjogeyJyZXNpemUiOiB7IndpZHRoIjogMjUwLCAiaGVpZ2h0IjogMjUwLCAiZml0IjogImNvbnRhaW4iLCAiYmFja2dyb3VuZCI6IHsiciI6IDAsICJnIjogMCwgImIiOiAwLCAiYWxwaGEiOiAwfX0sICJwbmciOiB7ImFkYXB0aXZlRmlsdGVyaW5nIjogdHJ1ZSwgInByb2dyZXNzaXZlIjogdHJ1ZSwgImZvcmNlIjogdHJ1ZX19fQ=="
                alt=""
              />
            </div>
            <div className="flex-1">
              <a href="/shops/city-group-for-priority-store">
                <h4 className="mb-1 font-semibold">
                  City Group for Priority Store
                </h4>
              </a>
              <span className="flex">
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </span>
              <p className="text-sm text-gray-500">0</p>
              <p className="max-w-xs text-sm text-gray-500">Bangladesh</p>
            </div>
          </div>
          <button className="flex justify-center items-center w-full px-4 py-2 mt-2 text-sm border rounded">
            <BsChatDots className="mx-2" />
            <span>Chat with Shop Owner</span>
          </button>
        </Col>
        <Col className="bills-to-card" sm={12} md={24} lg={12}>
          <h4 className="mb-4 font-semibold">Bills To</h4>
          <div className="flex ">
            <div className="mr-3">
              <div className="font-semibold pp-avatar">
                <div className="font-semibold pp-avatar_text" title="Shahriar">
                  <div
                    style={{
                      display: "table",
                      tableLayout: "fixed",
                      width: "100%",
                      height: "100%",
                      fontSize: "16.6667px",
                    }}
                  >
                    <span
                      style={{
                        display: "table-cell",
                        verticalAlign: "middle",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span>S</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <h4 className="font-semibold">Shahriar Emon</h4>
              <p className="text-sm text-gray-600">01843356499</p>
              <div className="flex items-start">
                <p className="text-sm text-gray-600 break-words">
                  vatara, Vatara, Dhaka, Dhaka
                </p>
              </div>
              <p className="text-sm text-gray-600">Contact no - 01843356499</p>
            </div>
          </div>
          <div className="btn-wrapper p-6 pb-0">
            <div className="flex">
              <div className="mr-4">
                <button className="btn-report px-2 text-orange rounded overflow-hidden relative whitespace-no-wrap">
                  <span className="ripple"></span>Report issue
                </button>
              </div>
              <div>
                <button className="btn-check-issue px-2 text-gray-700 rounded overflow-hidden relative whitespace-no-wrap">
                  <span className="ripple"></span>Check Issues
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default OrderInfo;
