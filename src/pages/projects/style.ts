import styled from "styled-components";

export const ProjectContainer = styled.div`
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  text-align: left;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    color: #555;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: disc;
    padding-left: 20px;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProjectHeaderLink = styled.a`
  color: #007bff;
  text-decoration: none;
  margin-bottom: 1rem;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const ProjectDetails = styled.div`
  margin-bottom: 20px;
`;

export const DetailItem = styled.p`
  margin: 0;
  padding: 5px 0;
`;

export const SectionTitle = styled.h2`
  margin-top: 20px;
  font-size: 1rem;
  color: #333;
`;

export const Content = styled.div`
  margin-top: 10px;
`;

export const SubSection = styled.div`
  margin-bottom: 15px;
`;

export const SubTitle = styled.h4`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 5px;
`;

export const Paragraph = styled.p`
  text-indent: 1em;
  margin: 0;
  padding: 5px 0;
  line-height: 1.6;
`;
export const SubTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SubTitleLink = styled.a`
  margin-left: 10px;
  font-size: 0.875rem;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
export const ImageContainer = styled.div`
  margin-top: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 20px;

  img {
    max-width: 50rem;
    height: auto;
  }
`;
export const NumberedList = styled.ol`
  list-style-type: decimal;
  margin-left: 20px;
`;

export const StrongIconContainer = styled.div`
  display: inline-flex;
  margin-left: 8px;
`;
export const StrongIcon = styled.span<{ filled: boolean }>`
  margin-right: 4px;
  color: ${(props) => (props.filled ? "black" : "lightgray")};
  font-size: 25px;
`;
