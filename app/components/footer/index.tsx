import { Container, Typography } from "@mui/material";
import { Col, Row } from "antd";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";
import { BsTwitterX } from "react-icons/bs";
import { MdEmail, MdOutlineDocumentScanner } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";

function Footer() {
  const itemsClass =
    "text-slate-300 hover:text-white transition duration-150 cursor-pointer p-2";

  return (
    <div className="w-[full] min-h-[300px] bg-slate-700">
      <Container maxWidth="md">
        <Row className="h-[260px] pb-3">
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className="footer-items"
          >
            <Link href="/" className={itemsClass}>
              <Typography>Home</Typography>
            </Link>
            <Link href="/scan" className={itemsClass}>
              <Typography>scan</Typography>
            </Link>
            <Link
              href="/articles/669017ee261897ff8bf5d197"
              className={itemsClass}
            >
              <Typography>validator</Typography>
            </Link>
            {/* <Link
              href="/articles/668540112b7f6349a1f3bbb8"
              className={itemsClass}
            >
              <Typography>relay</Typography>
            </Link> */}
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className="footer-items"
          >
            <Link
              href="/articles/6690198b261897ff8bf5d198"
              className={itemsClass}
            >
              <Typography>relay</Typography>
            </Link>
            <Link
              href="/articles/66901aa0261897ff8bf5d199"
              className={itemsClass}
            >
              <Typography>whitepaper</Typography>
            </Link>
            <Link href="/download" className={itemsClass}>
              <Typography>download</Typography>
            </Link>
            {/* <Link href="/dev" className={itemsClass}>
              <Typography>dev</Typography>
            </Link> */}
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className="footer-items"
          >
            <Link href="https://github.com/mgharebaghi82/centiweb" target="_blank" className={itemsClass}>
              <VscGithub size={20} />
            </Link>
            <Link
              target="_blank"
              href="https://x.com/centichain"
              className={itemsClass}
            >
              <BsTwitterX size={20} />
            </Link>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            xxl={6}
            className="footer-items"
          >
            <Link href="#" className={itemsClass}>
              <MdEmail size={20} />
            </Link>
            <Link
              target="_blank"
              href="https://t.me/centichain"
              className={itemsClass}
            >
              <FaTelegram size={20} />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col
            span={24}
            className="w-full h-[30px] text-center flex justify-center items-center text-white"
          >
            <Typography>
              Copyright © 2024 Centichain - No Mining, No Staking, No Problem.
              All rights reserved.
            </Typography>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
