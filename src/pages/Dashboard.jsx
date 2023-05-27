import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { footerBg, tringle } from "../ui/images";
import DbCollaps from "../components/DbCollaps";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const headings = [
    '<span className="font-codeProBold">7382691</span> - Funded',
    "Payouts",
    "Trading Rules",
    "Economic Calendar",
  ];

  const paras = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, saepe necessitatibus totam corrupti",
  ];
  const data = [
    {
      name: "1",
      pv: 1.5,
      amt: 2,
    },
    {
      name: "2",
      pv: 3,
      amt: 2,
    },
    {
      name: "3",
      pv: 1,
      amt: 2,
    },
    {
      name: "4",
      pv: 1,
      amt: 2,
    },
    {
      name: "5",
      pv: 1,
      amt: 2,
    },
    {
      name: "6",
      pv: 1,
      amt: 2,
    },
    {
      name: "7",
      pv: 1,
      amt: 2,
    },
    {
      name: "8",
      pv: 1,
      amt: 2,
    },
    {
      name: "9",
      pv: 1,
      amt: 2,
    },
    {
      name: "10",
      pv: 1,
      amt: 2,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="dashboard relative">
        <div className="container">
          <div className="wrapper z-10 relative py-20">
            <div className="top">
              <div className="heading grid gap-4">
                <h1 className="text-3xl">Dashboard</h1>

                <p>
                  To easily track your performance, you will have access to you
                  own personal Dashboard to monitor your trading data in
                  real-time. This helps you to avoid breaching any of the
                  trading rules.
                </p>
              </div>
            </div>

            {/* Dashboard */}
            <div className="dashboard mt-10 grid gap-6">
              <div className="activity grid gap-1 sm:flex justify-between items-center py-2 px-3 border border-primary/30 rounded-lg">
                <div className="left flex justify-center items-center gap-1">
                  <div className="globe">
                    <img className="w-[2.5rem]" src={footerBg} alt="globe" />
                  </div>
                  <h3 className="text-[0.9rem] sm:text-[1.1rem]">
                    Welcome Back,{" "}
                    <span className="name text-[0.9rem] sm:text-[1.1rem] font-codeProBold">
                      John!
                    </span>
                  </h3>
                </div>

                {/* Right */}
                <div className="right">
                  <div className="active-status ml-12 flex gap-3 place-items-center">
                    <div className="dot h-2 w-2 rounded-full bg-lime-400"></div>
                    <div className="status flex place-items-center gap-2">
                      <h4 className="font-codeProBold text-[0.9rem] sm:text-[1.1rem]">
                        status:
                      </h4>
                      <span className="font-codePro text-[0.9rem] sm:text-[1.1rem]">
                        In progress
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="main-content grid lg:grid-cols-7 gap-6">
                {/* left */}
                <div className="left lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 w-full gap-5 bg-primary/[10%] py-5 px-3 rounded-xl">
                  {/* Select account */}
                  <div className="select">
                    <div className="heading font-codeProBold flex pl-5 items-center bg-main-bg rounded-md py-2">
                      <h4>Select your Account</h4>
                    </div>

                    <div className="content pt-5 px-3">
                      <DbCollaps heading={headings[0]} para={paras[0]} />
                    </div>
                  </div>
                  {/* Credentials */}
                  <div className="credentials">
                    <div className="heading font-codeProBold flex pl-5 items-center bg-main-bg rounded-md py-2">
                      <h4>Account Credentials</h4>
                    </div>

                    <div className="content grid gap-3 mt-5 mx-3 py-4 px-3 rounded-lg border border-primary/40 bg-main-bg/50 ">
                      {/* Login */}
                      <div className="login">
                        <h5>
                          <span className="font-codePro underline">Login</span>{" "}
                          - 7382691
                        </h5>
                      </div>
                      {/* Password  */}
                      <div className="password">
                        <h5>
                          <span className="font-codePro underline">
                            Password{" "}
                          </span>
                          - HDJNSJ39
                        </h5>
                      </div>
                      {/* Login */}
                      <div className="login">
                        <h5>
                          <span className="font-codePro underline">
                            Server{" "}
                          </span>
                          - TheFundedhubBR
                        </h5>
                      </div>
                    </div>
                  </div>

                  {/* Select account */}
                  <div className="select">
                    <div className="heading font-codeProBold flex pl-5 items-center bg-main-bg rounded-md py-2">
                      <h4>Other sections:</h4>
                    </div>

                    <div className="content grid gap-4 pt-5 px-3">
                      <DbCollaps heading={headings[1]} para={paras[1]} />
                      <DbCollaps heading={headings[2]} para={paras[2]} />
                      <DbCollaps heading={headings[3]} para={paras[3]} />
                    </div>
                  </div>
                </div>
                {/* Right */}
                <div className="right flex flex-col gap-6 lg:col-span-5">
                  {/* Select account */}
                  <div className="select bg-primary/[10%] py-5 px-3 rounded-xl">
                    <div className="heading font-codeProBold flex pl-5 items-center bg-main-bg rounded-md py-2">
                      <h4>Account Overview:</h4>
                    </div>

                    <div className="content ml-2 flex flex-col md:flex-row md:justify-between gap-6 py-6 px-3">
                      <div className="left">
                        <div className="states grid gap-2.5">
                          {/* State */}
                          <div className="state flex place-items-center gap-2">
                            <div className="status h-1.5 w-1.5 rounded-full bg-lime-400"></div>
                            <h4>
                              <span className="font-codeProBold text-[0.9rem]">
                                Profit
                              </span>{" "}
                              Target:{" "}
                              <span className="font-codePro ml-2 text-[0.9rem]">
                                $1,283 / $ 10,000
                              </span>
                            </h4>
                          </div>
                          {/* State */}
                          <div className="state flex place-items-center gap-2">
                            <div className="status h-1.5 w-1.5 rounded-full bg-lime-400"></div>
                            <h4>
                              <span className="font-codeProBold text-[0.9rem]">
                                Daily
                              </span>{" "}
                              Drawdown:{" "}
                              <span className="font-codePro ml-2 text-[0.9rem]">
                                $2,483 / $ 5,000
                              </span>
                            </h4>
                          </div>
                          {/* State */}
                          <div className="state flex place-items-center gap-2">
                            <div className="status h-1.5 w-1.5 rounded-full bg-yellow-500 "></div>
                            <h4>
                              <span className="font-codeProBold text-[0.9rem]">
                                Equity
                              </span>{" "}
                              Drawdown:{" "}
                              <span className="font-codePro ml-2 text-[0.9rem]">
                                $2,483 / $ 10,000
                              </span>
                            </h4>
                          </div>
                        </div>
                      </div>

                      {/* right */}
                      <div className="right">
                        <div className="heading">
                          <h4 className="font-codeProBold">Next Stage:</h4>
                        </div>
                        <p className="text-[0.9rem] max-w-[20rem]">
                          Complete the current stage to scale your account.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Chart section */}
                  <div className="chart grid gap-4 py-2 px-5 border border-primary/60 rounded-xl">
                    <div className="heading font-codeProBold flex pl-5 items-center bg-main-bg rounded-md py-2">
                      <h4>Chart:</h4>
                    </div>

                    {/* chart */}
                    <div className="bg-primary/10 rounded-lg mb-2 h-[210px]  sm:h-[250px] md:h-[320px]">
                      <ResponsiveContainer height="100%">
                        <LineChart
                          data={data}
                          margin={{
                            top: 30,
                            right: 30,
                            left: 0,
                            bottom: 5,
                          }}
                        >
                          <CartesianGrid strokeDasharray="" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip />
                          <Legend />
                          <Line
                            type="monotone"
                            dataKey="pv"
                            stroke="#C7B3FC"
                            activeDot={{ r: 8 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* triangle */}
        <img
          className="triangle absolute -bottom-[20%] -left-[10%]  w-[50rem] rotate-[80deg] opacity-[0.09]"
          src={tringle}
          alt="tringle"
        />
        {/* triangle */}
        <img
          className="triangle absolute bottom-[20rem] -left-[15rem]  w-[50rem] rotate-[80deg] opacity-[0.09]"
          src={tringle}
          alt="tringle"
        />
        {/* triangle */}
        <img
          className="triangle absolute -top-[10%] -right-[20%]  w-[70rem] rotate-[80deg] opacity-[0.07]"
          src={tringle}
          alt="tringle"
        />
        {/* triangle */}
        <img
          className="triangle absolute -bottom-[5%] -right-[20%]  w-[50rem] rotate-[80deg] opacity-[0.07]"
          src={tringle}
          alt="tringle"
        />
      </section>
      <Footer />
    </>
  );
}
