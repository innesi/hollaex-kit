import React from 'react';
import { Image, Button, EditWrapper } from 'components';
import STRINGS from 'config/localizedStrings';

const MessageDisplay = ({
	stringId,
	text,
	onClick,
	buttonLabel = STRINGS['CLOSE_TEXT'],
	iconPath,
	iconId,
	title,
	titleId,
	style,
}) => (
	<div
		className={`${
			iconId === 'OTP_ACTIVE'
				? 'success_active-display-wrapper'
				: iconId === 'OTP_DEACTIVATED'
				? 'success_disable-display-wrapper'
				: 'success_display-wrapper'
		} d-flex align-content-between flex-wrap flex-column`}
		style={style}
	>
		<div className="success_display-content d-flex flex-column align-self-center flex-wrap justify-content-center align-items-center">
			<Image
				iconId={iconId}
				icon={iconPath}
				wrapperClassName="success_display-content-image"
			/>
			{title && (
				<div className="success_display-content-text bold">
					<EditWrapper stringId={titleId}>{title}</EditWrapper>
				</div>
			)}
			{iconId === 'OTP_ACTIVE' && (
				<div className="font-weight-bold">
					<EditWrapper stringId={'ACCOUNT_SECURITY.OTP.ACCOUNT_SECURED'}>
						{STRINGS['ACCOUNT_SECURITY.OTP.ACCOUNT_SECURED']}
					</EditWrapper>
				</div>
			)}
			<div className="success_display-content-text">
				<EditWrapper stringId={stringId}>{text}</EditWrapper>
			</div>
		</div>
		<Button label={buttonLabel} onClick={onClick} />
	</div>
);

export default MessageDisplay;
