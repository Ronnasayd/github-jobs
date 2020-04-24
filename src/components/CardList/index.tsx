import React from "react";
import { useSelector } from "react-redux";
import { IState } from "../../interfaces";
import { Container, Cards, CardItem, Content } from "./styles";
import logoDefault from "../../assets/images/logo-default.png";

export const CardList: React.FC = () => {
  const jobs = useSelector((state: IState) => state.jobs);
  const addDefaultSrc = (e: React.ChangeEvent<HTMLImageElement>) => {
    e.target.src = logoDefault;
  };
  return (
    <Container>
      <Cards>
        {jobs.map((job) => (
          <a
            key={job.id}
            href={job.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <CardItem>
              <img
                src={job?.company_logo || logoDefault}
                alt="logo"
                onError={addDefaultSrc}
              />
              <Content>
                <span>{job.title}</span>
                <p>{job.company}</p>
              </Content>
            </CardItem>
          </a>
        ))}
      </Cards>
    </Container>
  );
};
