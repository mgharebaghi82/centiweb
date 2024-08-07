import { Container, Typography } from "@mui/material";
import { Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

function Make() {
  const itemsClass = "flex justify-center items-center h-[400px]";
  return (
    <div className="min-h-[400px] w-full">
      <Container maxWidth="lg">
        <Row>
          <Col
            xs={24}
            sm={24}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className={itemsClass}
          >
            <Link href="https://www.rust-lang.org/" target="_blank">
              <Image
                src="/images/rust-logo-512x512.png"
                alt="rust logo"
                width={150}
                height={150}
              />
            </Link>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className={itemsClass}
          >
            <Link href="https://libp2p.io/" target="_blank">
              <Image
                src="/images/libp2p-logo.png"
                alt="rust logo"
                width={150}
                height={150}
              />
            </Link>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className={itemsClass}
          >
            <Link href="https://tauri.app/" target="_blank">
              <Image
                src="/images/tauri-logo.png"
                alt="rust logo"
                width={150}
                height={150}
              />
            </Link>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className={itemsClass}
          >
            <Link href="https://www.mongodb.com/" target="_blank">
              <Image
                src="/images/mongodb_logo.png"
                alt="rust logo"
                width={150}
                height={150}
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Make;
