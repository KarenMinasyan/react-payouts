import React, { useState } from 'react';
import { Heading, NotFoundData, Tag, Title, TitleWrapper } from 'styles';
import { SortableTable, Chip, SearchInput, Loading } from 'components';
import { Td, Tr } from 'components/SortableTable/styles';
import { CHIP_LABELS } from 'helpers';
import { usePayout } from 'context';
import { formatter } from 'utils';
import { useWait } from 'hooks';

const { PENDING } = CHIP_LABELS;

const Payouts = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const { payouts, loadingPayouts, onSearch } = usePayout();

	useWait(() => setLoading(!!loadingPayouts), loadingPayouts ? 0 : 300);

	return (
		<>
			<Heading>Payouts</Heading>
			<TitleWrapper>
				<Tag />
				<Title>Payout History</Title>
			</TitleWrapper>
			<SearchInput initial='' onSearch={onSearch} placeholder='Search' />
			<Loading blur loading={loading} />
			{!payouts.length && !loading && <NotFoundData>Not found data</NotFoundData>}
			{!!payouts.length && (
				<SortableTable
					data={payouts}
					headers={{
						username: 'Username',
						dateAndTime: 'Date & Time',
						status: 'Status',
						value: 'Value',
					}}
					WrapEl='div'
				>
					{sortedData => (
						<>
							{sortedData.map(item => (
								<Tr key={item.username}>
									<Td>{item.username}</Td>
									<Td>
										{formatter(
											item.dateAndTime,
											item.status === PENDING && { hour: '2-digit', minute: '2-digit' }
										)}
									</Td>
									<Td>
										<Chip label={item.status} variant={item.status} />
									</Td>
									<Td>{item.value}</Td>
								</Tr>
							))}
						</>
					)}
				</SortableTable>
			)}
		</>
	);
};

export default Payouts;
