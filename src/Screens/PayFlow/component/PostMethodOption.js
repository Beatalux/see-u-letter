import React,{useState} from 'react'
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import { BodyText, SubtitleText,WarningText } from '../../../commons/text'

const RadioButton = withStyles({
    root: {
        color: '#D9D9D9',
        '&$checked': {
            color: '#7C5B42',
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);


export default function PostMethodOption() {
    const [selectedValue, setSelectedValue] = useState("a");

    const handleChange = (e) => {
        setSelectedValue(e.target.value);
        //switch?


    }
    return (
        <div style={{ position: "relative", top:"850px" }}>
            <PostMethodRow >일반우편
            <ExtraPriceText></ExtraPriceText>
                <RadioButton
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    name="radio-button"
                    inputProps={{ 'aria-label': 'A' }}
                />
            </PostMethodRow>

            <PostMethodRow >등기우편
                <ExtraPriceText>+추가</ExtraPriceText>
                <RadioButton
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-button"
                    inputProps={{ 'aria-label': 'B' }}
                />
            </PostMethodRow >
            <WarningText fontColor="red" left="200px" top="100px">선택 후 변경이 불가능합니다.</WarningText>
        </div>


    )

}

const PostMethodRow = styled.div`
display:grid;
grid-template-columns:90px 90px 340px;
width:366px;
align-items:center;
margin-bottom:15px;

font-family: SpoqaHanSans;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
`;

const ExtraPriceText = styled.p`
height: 21px;
width: 92px;

border-radius: nullpx;

font-family: SpoqaHanSans;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 21px;
/* identical to box height */


color: #7C5B42;

`